import dayjs from "dayjs"
import { v4 as uuid} from "uuid"
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = ` count is ${dayjs(counter)}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  uuid()

}
