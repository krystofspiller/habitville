variable "db_token" {
  type    = string
  default = getenv("TURSO_TOKEN")
}

variable "db_url" {
  type    = string
  default = getenv("TURSO_URL_ATLAS")
}

env "turso" {
  src     = "file://schema.sql"
  url     = "${var.db_url}?authToken=${var.db_token}"
  exclude = ["_litestream*"]
}
