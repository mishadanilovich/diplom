import _ from 'lodash'

export const isArrayEqual = (x, y) => {
  return _(x).xorWith(y, _.isEqual).isEmpty()
}
