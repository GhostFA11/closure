function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {}

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store))
  }

  const storage = {
    get(key) {
      return store[key]
    },
    set(key, value) {
      store[key] = value
      save()
    },
    remove(key) {
      delete store[key]
      save()
    }
  }

  return storage
}

//Profile.js
const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'))

profileSetting.set('fullName', 'Son Dang')
profileSetting.set('age', 20)
profileSetting.set('address', 'Hanoi')
