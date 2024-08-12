import { useQuery } from '@tanstack/react-query'

import UserService from '../../../services/user.service'

export const useProfile = () => {
	return useQuery(['get profile'], () => UserService.GetProfile(), {
		select: ({ data }) => data
	})
}
