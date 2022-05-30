export const InputField = ({ id, placeholder, type, style, onChange }) => (
    <>
      <input id={id} placeholder={placeholder} type={type} onChange={onChange} style={style}></input>
    </>
  )