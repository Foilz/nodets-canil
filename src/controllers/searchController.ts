// Import (typescript)
import { Request, Response } from 'express'

// Model
import { Pet } from '../models/pet'

// Helper
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string

  // Empty form, redirect to home
  if (!query) {
    res.redirect('/')
    return
  }

  let list = Pet.getFromName(query)

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  })
}