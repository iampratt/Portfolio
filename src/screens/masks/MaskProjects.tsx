import useStore from '../../store/store';

function MaskProjects() {
  const setIsMaskActive=useStore().setIsMaskActive

  return (
    <div 
      onMouseEnter={()=>{
        setIsMaskActive(false)
      }}
      className="relative w-full h-[100dvh]">
    </div>
  );
}

export default MaskProjects;