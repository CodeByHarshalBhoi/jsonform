
export interface JsonForm {
  data: JsonFormJSON[]
}

export interface JsonFormJSON {
  name: string
  label: string
  value: string
  type: string
  placeholder?: string
  validators: ValidatorJSON
  options?: OptionJSON[]
}

export interface ValidatorJSON {
  required: boolean
}

export interface OptionJSON {
  label: string
  value: string
}
