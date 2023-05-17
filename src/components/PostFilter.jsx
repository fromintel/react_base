import React from 'react';
import CoreSelect from './UI/CoreSelect/CoreSelect';
import CoreInput from './UI/CoreInput/CoreInput';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div className='posts-list__sort'>
                <CoreSelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                    defaultOption='Sort by'
                    options={[
                        { title: 'By name', value: 'title' },
                        { title: 'By desc', value: 'desc' },
                    ]}
                />
            </div>
            <div className="post-list__search">
                <CoreInput
                    placeholder='Search...'
                    value={filter.query}
                    onChange={e => setFilter({ ...filter, query: e.target.value })}
                />
            </div>
        </div>
    );
};

export default PostFilter;