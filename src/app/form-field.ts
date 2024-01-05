
export interface FormField {
  data: FormFieldJSON[];
}

export interface FormFieldJSON {
  name: string
  label: string
  value: string
  type: string
  placeholder:string
  validators: ValidatorsJSON
  options?: OptionJSON[]
}

export interface ValidatorsJSON {
  required: boolean
}

export interface OptionJSON {
  label: string
  value: string
}
