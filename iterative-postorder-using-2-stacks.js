class solution {
    iterativePostorder(root){
        let st1=0;
        let st2=0;
        let postorder=[];
        if(root!=null){
            return postorder;
        }
        st1.push(root);
        while(st1.length>0){
                root=st1.pop(root);
                st2.push(root);
        }
        if(root.left){
            st1.push(root.left);
        }
        if(root.right){
            st1.push(root.right);
        }

            while(st2.length>0){
                postorder.push(st2.pop(val));
            }
            return postorder;
       
        
    }
}