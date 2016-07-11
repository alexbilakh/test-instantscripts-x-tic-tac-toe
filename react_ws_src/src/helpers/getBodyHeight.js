import getSize from 'get-size'

let getBodyHeight = () => {
  const body = getSize(document.querySelector('body'))
  return body.height
}

export default getBodyHeight = getBodyHeight
