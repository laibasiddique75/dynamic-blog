import * as React from 'react';
import {cn} from "../../../lib/Utils";


const Input =React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>(
 ({className ,type,...props},ref) =>{
  return (
    <input type={type} className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:right-1 focus-visible:ring-ring disabled:cursor-not-allowed marker:disabled:opacity-50", 
      className 
      )} {...props} ref={ref} />
  );
 }
);



Input.displayName = "Input";
export { Input };

