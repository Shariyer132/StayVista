import Container from '../../Container';
import CategoriesBox from './CategoriesBox';
import { categories } from "./CategoriesData";

const Categories = () => {
    return (
       <Container>
         <div className='pt-4 flex justify-between overflow-x-auto'>
            {
                categories.map((category) => <CategoriesBox
                    key={category.label}
                    label={category.label}
                    icon={category.icon}
                />)
            }
        </div>
       </Container>
    );
};

export default Categories;