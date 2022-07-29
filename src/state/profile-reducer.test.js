import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import ProfileReducer, { addPost } from './profile-reducer';

test('new post', () => {
    let action = addPost('iot')
    let state = {

        posts: [
            {message: 'tyhtyhwtyh'},
            {message: 'tyhtyhwtyh'},
            {message: 'tyhtyhwtyh'}
        ]
    }
    let newState = ProfileReducer(state, action) 

   expect( newState.posts.length).toBe(4)
});
