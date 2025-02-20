
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.termId) {
    return {
      termId: params.termId
    };
  }
  
  throw error(404, 'Not found');
}