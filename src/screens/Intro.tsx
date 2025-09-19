import { Button } from "../components/button"
import { AssetPreloader } from "../components/AssetPreloader"
import useStore from "../store/store"

type props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Intro({setIsLoading}: props) {
  const assetsLoading = useStore(state => state.assetsLoading);
  const loadingProgress = useStore(state => state.loadingProgress);

  return (
    <div className="absolute w-full h-[100dvh] top-0 left-0 bg-[#0d0d0d] flex items-center justify-center">
      <AssetPreloader />
      <div className="relative w-[225px] h-[225px] flex flex-col items-center justify-center">
        <div className="w-[53px] h-[53px] mb-12 [background:url(..//image--page-loading-logo-.png)_50%_50%_/_cover]" />
        {assetsLoading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#eb5939]"/>
            <div className="text-[#b7ab98] text-sm">
              Loading assets... {Math.round(loadingProgress)}%
            </div>
          </div>
        ) : (
          <Button
            variant="outline"
            className="w-[167px] h-[38px] rounded-[58.33px] border border-solid border-[#b7ab98] bg-transparent hover:bg-white hover:text-[#b4ba90] hover:cursor-pointer"
            onClick={()=>setIsLoading(false)}
          >
            <span className="[font-family:'Inter',Helvetica] text-[11.1px] tracking-[5.83px] font-bold text-[#b7ab98]">
              START
            </span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default Intro