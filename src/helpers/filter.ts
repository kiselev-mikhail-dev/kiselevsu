import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import { WorkItem, EducationItem } from '../types/interfaces'

export function checkItem (item: Partial<WorkItem & EducationItem>, str: string) {
  const values = Object.values(item)
  let correct = str.length === 0
  values.forEach((val) => {
    if ((typeof val === 'string' || typeof val === 'number') && val.toString().toLowerCase().includes(str.toLowerCase())) {
      correct = true
    } else if (typeof val === 'object' && val.url?.toLowerCase().includes(str.toLowerCase())) {
      correct = true
    } else if (typeof val === 'object' && !val.url && React.isValidElement(val) && jsxToString(val).toLowerCase().includes(str.toLowerCase())) {
      correct = true
    }
  })
  return correct
}