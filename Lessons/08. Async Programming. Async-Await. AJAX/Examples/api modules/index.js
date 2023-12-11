import api from '@api/index'

// какой-то код

const getTemplates = () => {
  api.saveTemplates({ templates: [] })
    .then((data) => {
      // какой-то код
    })
    .catch((error) => {
      console.error(error)
      // какой-то код
    })
}

// какой-то код
