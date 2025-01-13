/**
 *   This is also an example of a component that takes one string input named "title" and displays it in an h1 tag.
 *  
 *   We use the @Watch decorator to keep our display in sync with the input.
 * 
 * " className="" /> but notice the heavy use of decorators here.
 * 
 *   We use jsx here, like, the Preact example, but notice how this code makes heavy use of TypeScript decorators (@Component, @Prop, and @Watch). 
 * 
 **/

import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
    tag: 'title-display',
    styleUrl: 'title-display.css',
    shadow: true, // Use Shadow DOM for style encapsulation
})
export class TitleDisplay {
    /** The title to display in the component */
    @Prop() title: string = 'Default Title';

    @Watch('title')
    handleTitleChange(newValue: string) {
        console.log('Title changed to:', newValue);
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
            </div>
        );
    }
}