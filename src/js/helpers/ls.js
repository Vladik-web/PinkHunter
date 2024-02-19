// Функция для сохранения данных в локальное хранилище
export const saveData = (key, data) => {
  try {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
    console.log(`Данные с ключом ${key} успешно сохранены.`)
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error)
  }
}

// Функция для получения данных из локального хранилища
export const getData = key => {
  try {
    const jsonData = localStorage.getItem(key)
    if (jsonData === null) {
      console.log(`Данные с ключом ${key} не найдены.`)
      return null
    }

    const data = JSON.parse(jsonData)
    console.log(`Данные с ключом ${key} успешно получены.`)
    return data
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    return null
  }
}
