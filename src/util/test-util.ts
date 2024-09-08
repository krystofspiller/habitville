const buildForCases = <T1Key extends string, T1Val, T2>(
  cases: Record<T1Key, T1Val>,
  expectations: Array<T2>,
) => {
  const keys = Object.keys(cases) as Array<T1Key>

  if (keys.length !== expectations.length) {
    throw new Error(
      `Cases (${keys.length}) must have the same length as expectations (${expectations.length})`,
    )
  }

  return keys.map<[T1Key, T2]>((item, index) => [item, expectations[index]!])
}

export { buildForCases }
