
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.memberId) {
    return {
      memberId: params.memberId
    };
  }
  
  throw error(404, 'Not found');
}