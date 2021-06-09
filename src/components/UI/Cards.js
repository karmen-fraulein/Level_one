import '../UI/Card.css';

//გლობალური css კომპონენტი, რომელიც ვრაპავს საერთო სტილების მქონე კომპონენტებს
const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
    

}

export default Card;