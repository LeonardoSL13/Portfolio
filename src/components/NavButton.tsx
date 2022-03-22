import './NavButton.css'
type ButtonProps = {
  text: string;
  img: string ;
  page: string;
}


export function NavButton(Props: ButtonProps){

  return (
  <a href={Props.page}>
  <button className="button button1">
    {Props.text}
    <img className="img-button" src={Props.img} />
  </button>
</a>
);
}
