variable "db_token" {
  type    = string
  default = getenv("TURSO_TOKEN")
}

variable "turso_db_url" {
  type    = string
  default = getenv("TURSO_URL_ATLAS")
}

variable "schema_src" {
  type    = string
  default = "file://schema.sql"
}

env "turso" {
  src     = var.schema_src
  url     = "${var.turso_db_url}?authToken=${var.db_token}"
  exclude = ["_litestream*"]
}

env "local" {
  src     = var.schema_src
  url     = "sqlite://file.db"
}
