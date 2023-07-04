import Page from '../components/Page';
import Gallery from '../components/Gallery';

function Tub() {
    const photos = [
        { title: 'Untitled 1', file: 'Tub_01' },
        { title: 'Untitled 2', file: 'Tub_02' },
        { title: 'Untitled 3', file: 'Tub_03' },
        { title: 'Untitled 4', file: 'Tub_04' },
        { title: 'Untitled 5', file: 'Tub_05' },
        { title: 'Untitled 6', file: 'Tub_06' },
        { title: 'Untitled 7', file: 'Tub_07' },
        { title: 'Untitled 8', file: 'Tub_08' },
        { title: 'Untitled 9', file: 'Tub_09' },
        { title: 'Untitled 10', file: 'Tub_10' },
        { title: 'Untitled 11', file: 'Tub_11' },
        { title: 'Untitled 12', file: 'Tub_12' },
        { title: 'Untitled 13', file: 'Tub_13' },
        { title: 'Untitled 14', file: 'Tub_14' },
        { title: 'Untitled 15', file: 'Tub_15' },
        { title: 'Untitled 16', file: 'Tub_16' },
        { title: 'Untitled 17', file: 'Tub_17' },
        { title: 'Untitled 18', file: 'Tub_18' },
        { title: 'Untitled 19', file: 'Tub_19' },
        { title: 'Untitled 20', file: 'Tub_20' },
        { title: 'Untitled 21', file: 'Tub_21' },
        { title: 'Untitled 22', file: 'Tub_22' },
        { title: 'Untitled 23', file: 'Tub_23' },
        { title: 'Untitled 24', file: 'Tub_24' },
        { title: 'Untitled 25', file: 'Tub_25' },
        { title: 'Untitled 26', file: 'Tub_26' },
        { title: 'Untitled 27', file: 'Tub_27' },
        { title: 'Untitled 28', file: 'Tub_28' },
        { title: 'Untitled 29', file: 'Tub_29' },
    ];

    return (
        <Page>
            <h1>Tub, 2022</h1>
            <Gallery photos={photos} path="works/tub" description="Silver Gelatin Print" />
            <br />
            <h3>Final Series for Dark Room Photography I</h3>
        </Page>
    );
}

export default Tub;
