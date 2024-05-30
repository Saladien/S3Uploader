<script>
  import { onMount } from 'svelte';
  import AWS from 'aws-sdk';

  export let accessKeyId = '';
  export let secretAccessKey = '';
  export let bucketName = '';
  export let region = '';

  let file;

  onMount(() => {
    AWS.config.update({
      accessKeyId,
      secretAccessKey,
      region
    });
  });

  const uploadFile = async () => {
    if (!file) return;

    const s3 = new AWS.S3();
    const params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file
    };

    try {
      await s3.upload(params).promise();
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('File upload error:', error);
      alert('File upload failed.');
    }
  };
</script>

<style>
  /* Add any custom styles here */
</style>

<div>
  <input type="file" bind:this={file} />
  <button on:click={uploadFile}>Upload to S3</button>
</div>
