import style from './Button.module.scss'

type Props = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode
}

const Button = (props: Props) => {
  const { children, className, ...buttonProps } = props
  return (
    <button {...buttonProps} className={`${style.base} ${className}`}>
      {props.children}
    </button>
  )
}

export default Button
