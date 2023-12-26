interface ButtonProps{
    name: string;
    color?:'primary'|'danger'|'warning';
    onclick: () => void;
}
// ? means this property is optional
const Buttons = ({ name,onclick,color='warning'}:ButtonProps) => {
  return (
      <div>
          <button className={'btn btn-'+color} onClick={onclick}>{name}</button>
    </div>
  )
}

export default Buttons;