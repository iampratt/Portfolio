import useStore from '../../store/store';

function MaskProjects() {
  const setIsMaskActive = useStore().setIsMaskActive

  return (
    <div
      onMouseEnter={() => {
        setIsMaskActive(false)
      }}
      className="relative w-full min-h-screen lg:h-screen lg:min-h-0">
    </div>
  );
}

export default MaskProjects;