'use client'
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const params = useSearchParams();
  const mode = params.get('mode');

  return (
    <div style={{textAlign:'center'}}>
      Implementation is not present: auth page. <br/>
      Mode: {mode}.
    </div>
  );
}