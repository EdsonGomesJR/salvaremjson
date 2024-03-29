import { AddEdit } from 'components/users';
import { userService } from 'services/user.service';

export default AddEdit;

export async function getServerSideProps({ params } : any) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}