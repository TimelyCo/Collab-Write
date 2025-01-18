import {FaCaretDown} from "react-icons/fa";


const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
    return (
        <div className="h-6 border-b border-gray-300 flex items-end relative select-none print:hidden">
            <div
                id="ruler-container"
                className="relative w-full max-w-[780px] mx-auto h-full"
            >
                <Marker
                    position={56}
                    isLeft={true}
                    isDragging={false}
                    onMouseDown={() =>{}}
                    onDoubleClick={() =>{}}
                />
                <Marker
                    position={65}
                    isLeft={false}
                    isDragging={false}
                    onMouseDown={() =>{}}
                    onDoubleClick={() =>{}}
                />
                <div className="absolute inset-0 flex">
                    <div className="relative w-full h-full">
                        {markers.map((marker) => {
                            const position = (marker * 100) / 82; // Relative position as percentage

                            return (
                                <div
                                    key={marker}
                                    className="absolute bottom-0"
                                    style={{ left: `${position}%` }}
                                >
                                    {marker % 10 === 0 && (
                                        <>
                                            {/* Major tick */}
                                            <div className="w-[1px] h-3 bg-neutral-500" />
                                            {/* Label */}
                                            <span
                                                className="text-[10px] text-neutral-700 transform -translate-x-1/2 absolute"
                                                style={{ top: '0.0000001px' }} // Adjusted position for visibility
                                            >
                                                {marker / 10 + 1}
                                            </span>
                                        </>
                                    )}
                                    {marker % 5 === 0 && marker % 10 !== 0 && (
                                        <div className="w-[1px] h-2 bg-neutral-500" />
                                    )}
                                    {marker % 5 !== 0 && (
                                        <div className="w-[1px] h-1 bg-neutral-500" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};



interface MarkerProps {
    position: number;
    isLeft: boolean;
    isDragging: boolean;
    onMouseDown: () => void;
    onDoubleClick: () => void;
}

const Marker = ({
    isLeft,
    onMouseDown,
    onDoubleClick,
}: MarkerProps) =>{
   return(
    <div
    className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2"
    style={{ [isLeft ? "left" : "right"]: '${position}px' }}
    onMouseDown={onMouseDown}
    onDoubleClick={onDoubleClick}
    > 
      <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2"/>
    </div>
   )
};

