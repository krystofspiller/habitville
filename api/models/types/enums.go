package types

type InputType int

const (
	Text InputType = iota
	Number
)

func (me InputType) String() string {
	return [...]string{"text", "number"}[me]
}

type ButtonType int

const (
	Button ButtonType = iota
	Submit
)

func (me ButtonType) String() string {
	return [...]string{"button", "submit"}[me]
}
