import React from 'react';

function Content(props) {
    return (
        <div className='content'>
            <div className='left'>
                <h1>Header Footer</h1>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quod sit voluptate fuga voluptas molestias dicta recusandae pariatur commodi molestiae qui culpa maxime maiores officia eaque, illum provident blanditiis quidem.</h4>
            </div>
            <div className='right'>
                <img src='https://plus.unsplash.com/premium_photo-1664303626550-bc25e99ca208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
            
        </div>
    );
}

export default Content;