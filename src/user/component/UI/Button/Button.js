import React from 'react';
import { BaseButton } from './Button.styled';

function Button({ children }) {
    return (
       <BaseButton>
         {children}
       </BaseButton>
           
        
    );
}

export default Button;