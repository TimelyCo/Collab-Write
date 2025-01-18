

interface DcoumentsLayoutProps{
    children:React.ReactNode;
};

const DcoumentsLayout = ({children}:DcoumentsLayoutProps) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default DcoumentsLayout;