import {
  localAdd as localAddType,
  localSubstract as localSubstractType
} from "../types/test"

export const localAdd = i => ({
  type: localAddType,
  payload: i
})

export const localSubstract = i => ({
  type: localSubstractType,
  payload: -i
})
