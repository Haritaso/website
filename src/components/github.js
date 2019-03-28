import { h } from 'hyperapp';

export default ({ state }) => {
  return (
    <div>
      {state.list.forEach(data => {
        if(!state.toggle) {
          <div>
            {data.id}
          </div>
        }
      })}
    </div>
  )
}