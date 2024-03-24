/**
 * A UI component for a button
 * @param onClick The function executed when the button is clicked
 * @param text The text shown in the button
 */
export const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>
}
