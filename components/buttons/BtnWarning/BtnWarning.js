function BtnWarning(props) {
    let text = props.text;
    return (
        <button type="button" className='btn-warning' >{text}</button>
    );
  }

export default BtnWarning;