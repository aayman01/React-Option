import PropTypes from "prop-types";
const Links = ({ route }) => {
  return (
    <li className="mr-8 px-6 hover:bg-orange-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Links.propTypes = {
    route : PropTypes.object.isRequired
}
export default Links;
