// Import (typescript)
import { Request, Response } from 'express'

// Model
import { Pet } from '../models/pet'

// Menu Class
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
  // Model (getAll)
  let list = Pet.getAll()

  // Render Mustache (Home)
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  })
}

export const dogs = (req: Request, res: Response) => {
  // Model (getFromType)
  let list = Pet.getFromType('dog')

  // Render Mustache (Dogs)
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  })
}

export const cats = (req: Request, res: Response) => {
  // Model (getFromType)
  let list = Pet.getFromType('cat')

  // Render Mustache (Cats)
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
  })
}

export const fishes = (req: Request, res: Response) => {
  // Model (getFromType)
  let list = Pet.getFromType('fish')

  // Render Mustache (Fishes)
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },
    list
  })
}