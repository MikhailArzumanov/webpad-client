import styles from './SummaryBlock.module.css'

interface SpanModel {
  text: string,
  underlineWidth: number,
};

function createSpanModel(text: string, underlineWidth: number) : SpanModel {
  return {text, underlineWidth};
}

function Span(props: {model: SpanModel}){
  const model = props.model;
  return (
    <>
      <span>{model.text}</span>
      <hr style={{width: `${model.underlineWidth}%`}}/>
    </>
  );
}

export default function SummaryBlock(){
  const firstSpan  = createSpanModel('Переопределите опыт составления заметок и текстовых данных.', 71);
  const secondSpan = createSpanModel('Забудьте про беспокойство о синхронизации.', 45);
  const thirdSpan  = createSpanModel('Всё в одном приложении. В облаке.', 38);
  
  const textBlocks = [ firstSpan, secondSpan, thirdSpan ].map(
    (x, index) => <Span key={index} model={x} />
  );

  return (
    <div className={styles.appSummary}>
      {textBlocks}
    </div>
  );
}