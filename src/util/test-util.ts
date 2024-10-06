const buildForCases = <T1Key extends string, T2>(
  expectations: Record<T1Key, T2>,
) => {
  const keys = Object.keys(expectations) as Array<T1Key>
  return keys.map<[T1Key, T2]>((item) => [item, expectations[item]])
}

export { buildForCases }
