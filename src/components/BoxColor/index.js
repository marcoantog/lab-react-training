import style from './style.module.css';

export function BoxColor(props) {
  function valueToHex(value) {
    let hex = value.toString(16);
    if (hex.length === 1) {
      return '0' + hex;
    }
    return hex;
  }

  function rgbToHex(r, g, b) {
    return valueToHex(r) + valueToHex(g) + valueToHex(b);
  }

  return (
    <div
      className={style.oDiv}
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b}` }}
    >
      rgb({props.r},{props.g},{props.b})<br />
      {`#${rgbToHex(props.r, props.g, props.b)}`}
    </div>
  );
}
