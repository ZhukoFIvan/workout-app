import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import ListWorkouts from '../components/screens/workout/ListWorkouts'
import Workout from '../components/screens/workout/Workout'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',

		component: NewExercise,
		auth: true
	},

	 {
	 	path: '/workout/:id',

	 	component: Workout,
		auth: true,
	 },
	 {
	 	path: '/workouts',

	 	component: ListWorkouts,
		auth: true,
	},
		/*
	{
		path: '/exercise/:id',

		component: SingleExercise,
		auth: true,
	}, */
]
