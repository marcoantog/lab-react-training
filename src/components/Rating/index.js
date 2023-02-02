export function Rating(props) {
  let star = '';
  if (Math.round(props.children) === 0) {
    star = '☆☆☆☆☆';
  } else if (Math.round(props.children) === 1) {
    star = '★☆☆☆☆';
  } else if (Math.round(props.children) === 2) {
    star = '★★☆☆☆';
  } else if (Math.round(props.children) === 3) {
    star = '★★★☆☆';
  } else if (Math.round(props.children) === 4) {
    star = '★★★★☆';
  } else if (Math.round(props.children) === 5) {
    star = '★★★★★';
  }
  return star;
}
