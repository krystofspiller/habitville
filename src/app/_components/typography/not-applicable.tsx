import { forwardRef } from 'react'

const NotApplicable = forwardRef<HTMLSpanElement>((props, ref) => (
  <span
    ref={ref}
    {...props}
    className="no-underline border-0 border-b border-white border-dotted"
  >
    N/A
  </span>
))
NotApplicable.displayName = 'Search'

export { NotApplicable }
