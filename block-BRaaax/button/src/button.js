function Button(props){

    function getStyles(){
        let {type='primary',size='medium'}=props;
        return `button button-${type} button-${size}`
    }
    return <button className={getStyles()} onClick={props.onClickHandler}>{props.label || 'Button'}</button>
}


export default Button;