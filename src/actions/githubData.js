const actions = {
  githubList: () => (state, actions) => {
    fetch('https://api.github.com/users/Haritaso/events/public', {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then(res =>
      res.json()
    )
    .then(json => {
      const data = json.map(item => {
        const obj = {}
        switch(item.type) {
          case 'PushEvent':
            obj.show = true
            obj.id = item.id
            obj.avatar = item.actor.avatar_url
            break
          case 'PullRequestEvent':
            obj.show = true
            obj.id = item.id
            obj.avatar = item.actor.avatar_url
            break
          default:
            obj.show = false
            break
        }
        return obj
      })
      actions.addList(data)
    })
    .then(() => {
      actions.stateToggle()
    })
  },
  stateToggle: () => state => ({toggle: !state.toggle}),
  addList: data => state => ({list: [...state.list, ...data]}),
}

export default actions;