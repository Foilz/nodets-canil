import { Router } from 'express'

// Import Controllers
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

// Home Route
router.get('/', PageController.home)

// Animal Routes
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

// Seach Route
router.get('/search', SearchController.search)

export default router