export const SectionTitle = props => {
  const color = props.color ?? 'yellow'
  const className = `text-${color}-300 text-2xl pb-4`

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}